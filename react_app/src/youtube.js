import React, { useEffect, useState } from "react";
import './youtube.css';

export default function Youtube() {
    const [videoList, setVideoList] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
   
    const [selectedVideoId, setSelectedVideoId] = useState(null); 
    const fetchVideos = async (searchQuery) => {
        setLoading(true);
        try {
            const API_KEY = 'AIzaSyD15Zj65q52HQwTuDm-KcaS4yBy1j1ZleE';
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${searchQuery}&maxResults=10`);

            if (!response.ok) {
                throw new Error("Failed to fetch data from YouTube API");
            }

            const data = await response.json();

            const formattedData = data.items.map((item) => ({
                id: item.id.videoId,
                img_t: item.snippet.thumbnails.high.url,
                // img_c: item.snippet.thumbnails.default.url,
                detail: item.snippet.title,
                channelname: item.snippet.channelTitle,
                feature: new Date(item.snippet.publishedAt).toLocaleDateString(),
            }));

            setVideoList(formattedData);
        } catch (error) {
            console.error("Error fetching videos:", error);
        } finally {
            setLoading(false);
        }
    };

    const shortsQuery = () => {
        fetchVideos("shorts")
    }
    const subscriptionQuery = () => {
        fetchVideos("subscription")
    }
    const exploreQuery = () => {
        fetchVideos("explore")
    }
    const LibraryQuery = () => {
        fetchVideos("Library")
    }

    const handleSearch = (event) => {
        event.preventDefault();
        fetchVideos(query);
    };

    useEffect(() => {
       
        fetchVideos('React tutorials');
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    const openVideo = (videoId) => {
        setSelectedVideoId(videoId);
    };
    
    const closeVideo = () => {
        setSelectedVideoId(null);
    };

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
                {/* Sidebar Navigation */}
                <div className="Navigator1">
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true"
                            alt="Home icon"
                        />
                        <p className="text">Home</p>
                    </div>
                    <div className="images" onClick={exploreQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true"
                            alt="Explore icon"
                        />
                        <p className="text">Explore</p>
                    </div>
                    <div className="images" onClick={shortsQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true"
                            alt="Shorts icon"
                        />
                        <p className="text">Short</p>
                    </div>
                    <div className="images" onClick={subscriptionQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true"
                            alt="Subscription icon"
                        />
                        <p className="text">Subscription</p>

                    </div>
                </div>
                <div className="navi2">
                    <div className="images" onClick={LibraryQuery}>
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
                <input
                    type="text"
                    placeholder="Search"
                    className="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div className="lens">
                    <div className="icon">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                            alt=""
                            onClick={handleSearch}
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
            <div className="options">
                <div className="create"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" /></div>
                <div className="more"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" /></div>
                <div className="bell"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" /></div>
                <div className="account"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true" alt="" /></div>
            </div>
            <div className="related">
                <button className="active">All</button>
                <button>cook Studio</button>
                <button>UX</button>
                <button>Case Study</button>
                <button>Music</button>
                <button>Bangla Lofi</button>
                <button>Tour</button>
                <button>Saintmartin</button>
                <button>Tech</button>
                <button>IPhone 13</button>
                <button>User Interface Design</button>
            </div>
            <div className="main2">
                {videoList.map((b) => (
                    <div key={b.id} className="thumbnail1" onClick={() => openVideo(b.id)}>
                    <img src={b.img_t} alt={b.detail} height={145} />
                    <div className="information">
                        <div className="videodetail">{b.detail}</div>
                    </div>
                    <div className="channelname">{b.channelname}</div>
                    <div className="views">{b.feature}</div>
                </div>
                
                ))}
            </div>
            {selectedVideoId && (
    <div className="video-modal" onClick={closeVideo}>
        <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${selectedVideoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
            ></iframe>
            <button className="close-button" onClick={closeVideo}>
                Close
            </button>
        </div>
    </div>
)}
        </>
    );
}
