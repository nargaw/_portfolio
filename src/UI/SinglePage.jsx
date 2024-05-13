import useStore from '../useStore/useStore'

export default function SinglePage()
{

    const mode = useStore(state => state.mode)
    const darkModeOn = useStore(state => state.darkModeOn)
    const lightModeOn = useStore(state => state.lightModeOn)

    const changeStyle = () => {
        if(mode !== 'light') lightModeOn()
        else darkModeOn()
    }

    const containerStyle = {
        outline: 'none',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '32px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'visible',
        padding: '16px',
        position: 'relative',
        // width: '100%',
        PointerEvents: 'none',
        // backdropFilter: 'blur(0.5px)',
        backgroundColor: mode == 'dark' ? "#f5f5f720" : '#0a0a0820',
        transition: '.75s all ease'
    }

    const headerStyle = {
        alignItems: 'flex-start',
        display: 'flex',
        flex: 'none',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '16px',
        height: 'min-content',
        width: '100%',
        justifyContent: 'center',
        overflow: 'visible',
        padding: 0,
        positin: 'relative'
    }

    const titleStyle = {
        fontFamily: "Inter, sans-serif",
        color: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        fontStyle: "italic",
        fontSize: "36px",
        margin: '0',
        transition: '.75s all ease'
    }

    const titleDescription = {
        fontFamily: "DM Mono, monospace",
        color: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        fontSize: '14px',
        transition: '.75s all ease'
    }

    const titleDetail = {
        fontFamily: "DM Mono, monospace",
        color: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        fontSize: '14px',
        paragraphSpacing: '20px',
        lineHeight: '1.75em',
        textAlignment: 'start',
        transition: '.75s all ease'
    }

    const titleExtra = {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: '8px',
        margin: 0
    }

    const titleExtraLocation = {
        alignItems: 'center',
        display: 'flex',
        flex: 'none',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: '8px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 0,
        position: 'relative',
        width: 'min-content'
    }

    const titleExtraMapPinLocation = {
        flex: 'none',
        height: '16px',
        position: 'relative',
        width: '16px',
        fill: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        transition: '.75s all ease'
    }

    const titleExtraLocationText = {
        flex: 'none',
        width: 'auto',
        height: 'auto',
        position: 'relative',
        whiteSpace: 'pre'
    }

    const textParagraph = {
        fontFamily: "DM Mono, monospace",
        color: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        fontSize: '14px',
        fontStyle: 'normal',
        textAlignment: 'start',
        paragraphSpacing: '20px',
        lineHeight: '1.75em',
        letterSpacing: '0px',
        transition: '.75s all ease'    
    }

    const titleAvailability = {
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: '8px',
        height: 'min-content'
    }

    //Project

    const projectsStyle = {
        alignItems: 'flex-start',
        display: 'flex',
        flex: 'none',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '16px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '16px 0',
        position: 'relative',
        width: '100%'
    }

    const projectsTitleStyle = {
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: '0px',
        lineHeight: '1.4em',
        paragraphSpacing: '40px',
        textAlignment: 'start',
        color: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        transition: '.75s all ease'
    }

    const projectMainStyle = {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '16px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '16px',
        position: 'relative',
        textDecoration: 'none'
    }

    const projectTitleStyle = {
        fontFamily: 'Inter, san-serif',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: '0px',
        lineHeight: '1.4em',
        paragraphSpacing: '0px',
        textAlignment: 'start',
        color: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        transition: '.75s all ease'
    }

    const projectDetailStyle = {
        fontFamily: "DM Mono, monospace",
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: '0px',
        lineHeight: '1.75em',
        paragraphSpacing: '20px',
        textAlignment: 'start',
        color: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        transition: '.75s all ease'
    }

    const projectLinkStyle = {
        fontFamily: "DM Mono, monospace",
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: '0px',
        lineHeight: '1.75em',
        paragraphSpacing: '20px',
        textAlignment: 'start',
        color: "#0989f8",
        textDecoration: 'none'
    }

    const dividerStyle = {
        borderBottomWidth: '1px',
        borderColor: mode == 'dark' ? '#ffffff20' : '#0a0a0820' ,
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderStyle: 'solid',
        borderTopWidth: '0px',
        width: '100%',
        opacity: 1
    }

    const contactStyle = {
        alignItems: 'flex-start',
        display: 'flex',
        flex: 'none',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '16px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '32px 0 16px',
        position: 'relative',
        width: '100%'
    }

    const contactTitleStyle = {
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: '0px',
        lineHeight: '1.4em',
        paragraphSpacing: '40px',
        textAlignment: 'start',
        color: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        transition: '.75s all ease'
    }

    const contactlistStyle = {
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: 'none',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '16px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 0,
        position: 'relative'
    }

    const contactItemStyle = {
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: '16px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 0,
        position: 'relative'
    }

    const contactItemLabel = {
        fontFamily: 'DM Mono, monospace',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        letterSpacing: '0px',
        lineHeight: '1.75em',
        paragraphSpacing: '20px',
        textAlignment: 'start',
        color: mode == 'dark' ? "#f5f5f7" : '#0a0a08',
        transition: '.75s all ease'
    }

    const contactItemLine = {
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: '1 0 0px',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: '10px',
        height: '0.07px',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 0,
        position: 'relative',
        width: '110px',
        backgroundColor: mode == 'dark' ? '#ffffff20' : '#0a0a0820',
        transition: '.75s all ease'
    }

    const contactItemLine2 = {
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: '1 0 0px',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: '10px',
        height: '0.07px',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 0,
        position: 'relative',
        width: '170px',
        backgroundColor: mode == 'dark' ? '#ffffff20' : '#0a0a0820',
        transition: '.75s all ease'
    }

    const contactItemLine3 = {
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: '1 0 0px',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: '10px',
        height: '0.07px',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 0,
        position: 'relative',
        width: '140px',
        backgroundColor: mode == 'dark' ? '#ffffff20' : '#0a0a0820',
        transition: '.75s all ease'
    }

    const contactItemLink = {
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        flexShrink: 0,
        fontFamily: 'DM Mono, monospace',
        lineHeight: '1.75em',
        color: "#0989f8",
        transition: '.75s all ease'
    }

    const link = {
        fontFamily: "DM Mono, monospace",
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: '0px',
        lineHeight: '1.75em',
        paragraphSpacing: '20px',
        textAlignment: 'start',
        color: "#0989f8",
        textDecoration: 'none',
        transition: '.75s all ease'
    }

    const link2 = {
        fontFamily: "DM Mono, monospace",
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: '0px',
        lineHeight: '1.75em',
        paragraphSpacing: '20px',
        textAlignment: 'start',
        display: 'flex',
        alignItems: 'center',
        color: "#0989f8",
        textDecoration: 'none',
        transition: '.75s all ease'
    }

    const lightDarkToggleStyle = {
        display: 'flex',
        background: '#ffffff',
        width: '60px',
        height: '30px',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100px',
        cursor: 'pointer',
        transition: '.75s all ease'
    }

    const lightDarkToggleStyle2 = {
        display: 'flex',
        background: '#000',
        width: '60px',
        height: '30px',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100px',
        cursor: 'pointer',
        transition: '.75s all ease'
    }

    const toggleCircleStyle = {
        content: '',
        background: '#000',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        top: '5px',
        left: '4px',
        transform: 'translateX(-15px)',
        transition: '.75s all ease'
    }

    const toggleCircleStyle2 = {
        content: '',
        background: '#fff',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        top: '5px',
        left: '4px',
        transform: 'translateX(15px)',
        transition: '.75s all ease'
    }

    
    
    if(mode == 'dark' ? document.body.style.backgroundColor = '#000' : document.body.style.backgroundColor = '#fff')
    document.body.style.transition = '.75s all ease'

    return <>
        <div style={containerStyle} className="container">
            <div style={headerStyle}>
                <h1 style={titleStyle}>Nate Argaw</h1>
                <div style={titleDescription}>Front-End Developer w/ expertise in WebGL</div>
                <div style={titleDetail}>A passionate software developer adept at utilizing cutting-edge web technologies to create immersive, engaging and interactive experiences. Dedicated to building and supporting the community.</div>
                <div style={titleExtra}>
                    <div style={titleExtraLocation}>
                        <div style={titleExtraMapPinLocation}>
                        {/* <i className="fa-solid fa-location-dot"></i> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        </div>
                        <div style={titleExtraLocationText}>
                            <p style={textParagraph}>Greenville, SC, USA</p>
                        </div>
                    </div>
                    {/* <div style={titleAvailability}>
                        <div className="glowCircle"></div>
                        <div style={titleExtraLocationText}>
                            <p style={textParagraph}>Available for Freelance Projects</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div style={dividerStyle}></div>
            <div style={projectsStyle}>
                <p style={projectsTitleStyle}>Projects</p>
                <div style={projectMainStyle}>
                    {/* project one title */}
                    <p style={projectTitleStyle}>LUMEPATH</p>
                    
                    {/* project one detail */}
                    <p style={projectDetailStyle}>
                        LUMEPATH is a web-based medical software application built to help patients understand their diagnosis in an engaging and interactive way by utilizing 3D anatomic models. Utilizing my previous background in Pathology and expertise in 3D web development, I am building this app from the ground up to improve the quality of care for patients and enhance the diagnostic process.
                    </p>

                    {/* project one link */}
                    <p style={projectLinkStyle}><a style={projectLinkStyle} href="https://www.lumepath.org">lumepath.org (coming soon)</a></p>
                </div>
                <div style={projectMainStyle}>
                    {/* project two title */}
                    <p style={projectTitleStyle}>SHADER DAILY</p>
                    
                    {/* project two detail */}
                    <p style={projectDetailStyle}>
                        SHADER DAILY is a compilation of more than 700 shader projects that are easily accessible in a single website. This website allows me to track my exploration of art and code as well as document technical graphics programming concepts and share this knowledge with the community. Projects are built using fragment and vertex shaders written in GLSL and React-three-fiber.
                    </p>

                    {/* project two link */}
                    <p style={projectLinkStyle}><a style={projectLinkStyle} href="https://shaderdaily.com">shaderdaily.com</a></p>
                </div>  
                <div style={projectMainStyle}>
                    {/* project three title */}
                    {/* <p style={projectTitleStyle}>SOST STUDIO</p> */}
                    <p style={projectTitleStyle}>Balanc3D Game</p>
                    
                    {/* project three detail */}
                    {/* <p style={projectDetailStyle}>
                        SOST STUDIO is a design and development studio with highest standards in producing immersive and engaging web experiences to elevate brands by expanding reach, enchancing customer experience and help businesses unlock their full potential.
                    </p> */}
                    <p style={projectDetailStyle}>
                    This project emerged from the exploration of the interaction between the mobile device orientation events API and Physics. The result turned into this platform game. In this 10 level game, the user guides the player object to the finish by tilting the mobile device.
                    </p>

                    {/* project three link */}
                    <p style={projectLinkStyle}><a style={projectLinkStyle} href="https://www.balanc3dgame.com/">https://www.balanc3dgame.com/</a></p>
                </div>
            </div>
            
            <div style={dividerStyle}></div>
            <div style={contactStyle}>
                <div style={contactTitleStyle}>Contact</div>
                <div style={contactlistStyle}>
                    <div style={contactItemStyle}>
                        <p style={contactItemLabel}>Email</p>
                        <div style={contactItemLine}></div>
                        <p style={contactItemLink}><a style={link} href="mailto: nateargaw@gmail.com">nateargaw@gmail.com</a></p>
                    </div>
                    <div style={contactItemStyle}>
                        <p style={contactItemLabel}>Twitter</p>
                        <div style={contactItemLine2}></div>
                        <p style={contactItemLink}><a style={link} href="https://twitter.com/nate_dev_">@nate_dev_</a></p>
                    </div>
                    <div style={contactItemStyle}>
                        <p style={contactItemLabel}>Linkedin</p>
                        <div style={contactItemLine3}></div>
                        <p style={contactItemLink}><a style={link} href="https://www.linkedin.com/in/nateargaw/">in/nateargaw</a></p>
                    </div>
                </div>
            </div>
            <div style={dividerStyle}></div>
               
            <a style={link2} href="https://drive.google.com/file/d/1X9ne9HDmuQHjxl8vDflM8wBhz_fnbs2a/view?usp=sharing">Download Resume</a>
           
            <div style={dividerStyle}></div>
            <div onClick={changeStyle} className="toggle" style={mode == 'dark' ? lightDarkToggleStyle : lightDarkToggleStyle2}><div className="toggleCircle" style={mode == 'dark' ?toggleCircleStyle : toggleCircleStyle2}></div></div>
            <div style={dividerStyle}></div>
        </div> 
    </>
}