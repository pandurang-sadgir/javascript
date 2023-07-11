let url1 = 'image/1.jpg';
let url2 = 'image/2.jpg';
let url3 = 'image/3.jpg';
let url4 = 'image/4.jpg';
let url5 = 'image/5.jpg';


function DownloadningImage(url,callBack){
    setTimeout(()=>{
        console.log(`Downloading Image ${url}`);
        callBack(url);
    },1000);

    
}

DownloadningImage(url1,callBackFunction1);

function callBackFunction1(url){
    console.log(`processing image${url}`);
        DownloadningImage(url2,(url)=>{ 
            console.log(`processing image${url}`);
                DownloadningImage(url3,(url)=>{
                    console.log(`processing image${url}`);
                        DownloadningImage(url4,(url)=>{
                            console.log(`processing image${url}`);
                             
                        });
                    

                });


        });
     
}

console.log(`All images Download and Processed Successfully`);
// output:
// All images Download and Processed Successfully
// Downloading Image image/1.jpg
// processing imageimage/1.jpg
// Downloading Image image/2.jpg
// processing imageimage/2.jpg
// Downloading Image image/3.jpg
// processing imageimage/3.jpg
// Downloading Image image/4.jpg
// processing imageimage/4.jpg

// Note:When we are nesting many asyncronous function inside the every callback function then it is called as callback hell or pyramid of doom. to solve this problem we should use the promises,async await


function processingImage(url){
    console.log(`processing image simultaneosly but not sequentially it depends on image size,processor speed ${url}`);
}

DownloadningImage(url1,processingImage);
DownloadningImage(url2,processingImage);
DownloadningImage(url3,processingImage);
DownloadningImage(url4,processingImage);
console.log('This block the execution');
// Note:This is not callback hail