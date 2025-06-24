// Mengimpor modul 'http' bawaan Node.js untuk membuat server HTTP.
const http = require('http');

// Fungsi utama yang akan dijalankan setiap kali server menerima sebuah request.
const requestListener = (request, response) => {
    // Menetapkan header respons, memberitahu client bahwa kontennya adalah format JSON.
    response.setHeader('Content-Type', 'application/json');
    // Menetapkan header kustom untuk menunjukkan teknologi yang digunakan.
    response.setHeader('Powered-By', 'Node.js');

    // Mengambil method (GET, POST, dll.) dan url (/, /about, dll.) dari request yang masuk.
    const { method, url } = request;

    // Routing: Pengecekan URL yang diminta oleh client.
    if (url === '/') {
        // Blok ini dijalankan jika client mengakses endpoint root ('/').
        
        // Pengecekan method HTTP yang digunakan.
        if(method === 'GET') {
            // Memberi status code 200 OK jika method adalah GET.
            response.statusCode = 200;
            // Mengirimkan data JSON sebagai body respons.
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            // Memberi status code 400 Bad Request jika method selain GET.
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }

    } else if (url === '/about') {
        // Blok ini dijalankan jika client mengakses endpoint '/about'.

        if(method === 'GET') {
            // Memberi status code 200 OK untuk method GET di endpoint /about.
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah halaman about',
            
            }));

        } else if (method === 'POST') {
            // Blok ini menangani request body yang dikirim oleh client.
            let body = []; // Variabel untuk menampung potongan data (chunk) dari body.

            // Event listener 'data' akan dijalankan setiap kali ada potongan data yang masuk.
            request.on('data', (chunk) => {
                body.push(chunk);
            });

            // Event listener 'end' akan dijalankan setelah semua potongan data selesai diterima.
            request.on('end', () => {
                // Menggabungkan semua potongan data (Buffer) menjadi satu dan mengubahnya ke string.
                body = Buffer.concat(body).toString();
                // Mem-parsing string JSON menjadi objek JavaScript dan mengambil properti 'name'.
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                // Mengirimkan respons sapaan dengan nama yang didapat dari body request.
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            // Menangani jika method pada endpoint /about bukan GET atau POST.
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else {
        // Blok ini dijalankan jika URL yang diminta tidak cocok dengan rute manapun.
        
        // Memberi status code 404 Not Found.
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        
        }));

    }
    
/* ini komentar untuk method request tanpa routing request   
    //Method/verb request
    if (method === 'GET') {
    response.end('<h1>Hello!</h1>');

    }
    //Method/verb request
    if (method === 'POST')   {
        let body = [];
        
        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hi, ${name}!</h1>`);
        });
    }
     
    //Method/verb request   
    if (method === 'PUT') {
        response.end('<h1>Hey!</h1>');
    }

    //Method/verb request
    if (method === 'DELETE') {
        response.end('<h1>Goodbye!</h1>');
    }
 */

};

// Membuat instance server dengan fungsi requestListener sebagai penangan request.
const server = http.createServer(requestListener);

// Mendefinisikan port dan host tempat server akan berjalan.
const port = 5000;
const host = 'localhost';

// Menjalankan server dan membuatnya "mendengarkan" request yang masuk pada port dan host yang ditentukan.
server.listen(port, host, () => {
    // Callback function yang akan dijalankan sekali saat server berhasil berjalan.
    console.log(`Server is running at http://${host}:${port}`);
});