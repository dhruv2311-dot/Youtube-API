const express = require("express")
const app = express()
const port = 3001
const cors = require("cors");
app.use(cors())
const videoList = [
    { id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
    { id: 2, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'ATC Andriod TOTO Company', feature: '1.5M views - 2 days ago' },
    { id: 3, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Saptarshi Prakash', feature: '1.5M views - 2 days ago' },
    { id: 4, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Lopamundra Mitra,Anupam Roy', feature: '1.5M views - 2 days ago' },
    { id: 5, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'AJ&Smar', feature: '1.5M views - 2 days ago' },
    { id: 6, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
    { id: 7, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
    { id: 8, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
    { id: 9, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
    { id: 10, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
    { id: 11, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
    { id: 12, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true', img_c: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature: '1.5M views - 2 days ago' },
];
app.get("/api/videoList", (req, res) => {
    res.json(videoList);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});