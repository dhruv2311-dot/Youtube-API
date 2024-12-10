import React, { useEffect, useState } from "react";
import './youtube.css';

export default function Youtube() {
    const [videoList, setVideoList] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        fetch("http://localhost:3001/api/videoList")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                return response.json();
            })
            .then((data) => {
                setVideoList(data); 
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching videos:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
       
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="sidebar">
                
                <div className="left">
                    <div className="line">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
                            alt="Menu icon"
                        />
                    </div>
                    <div className="go">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
                            alt="YouTube logo"
                        />
                    </div>
                </div>
                <div className="Navigator1">
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true"
                            alt="Home icon"
                        />
                        <p className="text">Home</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true"
                            alt="Explore icon"
                        />
                        <p className="text">Explore</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true"
                            alt="Shorts icon"
                        />
                        <p className="text">Short</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true"
                            alt="Subscription icon"
                        />
                        <p className="text">Subscription</p>

                    </div>
                </div>

                <div className="navi2">
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true"
                            alt="Library icon"
                        />
                        <p className="text">Library</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true"
                            alt="History icon"
                        />
                        <p className="text">History</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true"
                            alt="Your Videos icon"
                        />
                        <p className="text">New Videos</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true"
                            alt="Watch Later icon"
                        />
                        <p className="text">Watch Later</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true"
                            alt="Liked Videos icon"
                        />
                        <p className="text">Liked Videos</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="text">Show More</p>
                    </div>
                </div>
                <h5>SUBSCRIPTIONS</h5>
                <div className="navigator3">
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="text">Dev On The Go</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="text">Coke Studio Bangla</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="text">MKBHD</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="text">Figma</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="text">Liked Videos</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="text">Show More</p>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <input type="text" placeholder="Search" className="search" />
                <div className="lens">
                    <div className="icon">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                            alt=""
                        />
                    </div>
                    <div className="mic">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
                            alt=""
                        />
                    </div>
                </div>

            </div>
            <div className="related">
                <button className="active">All</button>
                <button>Coke Studio</button>
                <button>UX</button>
                <button>Case Study</button>
                <button>Music</button>
                <button>Bangla Lofi</button>
                <button>Tour</button>
                <button>Saintmartin</button>
                <button>Tech</button>
                <button>iPhone 13</button>
                <button>User Interface Design</button>
            </div>
            <div className="main2">
                {videoList.map((b) => (
                    <div key={b.id} className="thumbnail1">
                        <img src={b.img_t} alt="" height={145} />
                        <div className="information">
                            <img src={b.img_c} alt="" />
                            <div className="videodetail">{b.detail}</div>
                        </div>
                        <div className="channelname">{b.channelname}</div>
                        <div className="views">{b.feature}</div>
                    </div>
                ))}
            </div>
        </>
    );
}
