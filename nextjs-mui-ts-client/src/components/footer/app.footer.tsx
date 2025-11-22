'use client';
import { useHasMounted } from "@/utils/custom.hook";
import { AppBar, Container } from "@mui/material";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AppFooter = () => {

    const hasMounted = useHasMounted();

    if (!hasMounted) {
        return (<></>);
    }

    console.log("Check ENV BACKEND_URL:", process.env.NEXT_PUBLIC_BACKEND_URL);

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    top: 'auto',
                    bottom: 0,
                    backgroundColor: '#f2f2f2',
                }}
            >
                {/* Nhúng bài hát từ soundcloud */}
                {/* <div style={{ width: '100%', marginBottom: '15px' }}>
                    <iframe
                        width="100%"
                        height="300"
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/tr-n-m-nh-quang-1/0-phai-ngay-hom-nay-demo&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>

                    <div
                        style={{
                            fontSize: 10,
                            color: '#cccccc',
                            lineBreak: 'anywhere',
                            wordBreak: 'normal',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            fontFamily:
                                'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                            fontWeight: 100,
                        }}
                    >
                        fix&nbsp;
                        <a
                            href="https://soundcloud.com/tr-n-m-nh-quang-1"
                            title="QNT"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: '#cccccc', textDecoration: 'none' }}
                        >
                            QNT
                        </a>
                        &nbsp;·&nbsp;
                        <a
                            href="https://soundcloud.com/tr-n-m-nh-quang-1/0-phai-ngay-hom-nay-demo"
                            title="0 phai ngay hom nay demo"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: '#cccccc', textDecoration: 'none' }}
                        >
                            0 phai ngay hom nay demo
                        </a>
                    </div>
                </div> */}
                <Container sx={{ display: "flex", gap: 10 }}>
                    <AudioPlayer
                        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
                        volume={0.5}
                        style={{
                            boxShadow: "unset",
                            backgroundColor: "#f2f2f2",
                        }}
                    // Try other props!
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            justifyContent: "center",
                            minWidth: 100
                        }}
                    >
                        <div style={{ color: "#ccc" }}>ChillFeel</div>
                        <div style={{ color: "black" }}>Muốn nói với em nhiều điều</div>
                    </div>
                </Container>
            </AppBar>
        </div>
    );
};

export default AppFooter;