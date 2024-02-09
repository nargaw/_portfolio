export default function SinglePage()
{
    const containerStyle = {
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
        // width: '100%'
        PointerEvents: 'none',
        backgroundColor: '#1f1f1f50'
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
        color: "#f5f5f7",
        fontStyle: "italic",
        fontSize: "36px",
        margin: '0'
    }

    const titleDescription = {
        fontFamily: "DM Mono, monospace",
        color: "#f5f5f7",
        fontSize: '14px'
    }

    const titleDetail = {
        fontFamily: "DM Mono, monospace",
        color: "#f5f5f7",
        fontSize: '14px',
        paragraphSpacing: '20px',
        lineHeight: '1.75em',
        textAlignment: 'start'
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
        fill: "#f5f5f7",
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
        color: "#f5f5f7",
        fontSize: '14px',
        fontStyle: 'normal',
        textAlignment: 'start',
        paragraphSpacing: '20px',
        lineHeight: '1.75em',
        letterSpacing: '0px'    
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
        color: "#f5f5f7",
    }

    const projectOneStyle = {

    }

    const projectTwoStyle = {

    }

    return <>
        
            <div style={containerStyle} className="container">
                <div style={headerStyle}>
                    <h1 style={titleStyle}>Nate Argaw</h1>
                    <div style={titleDescription}>3D Front-end developer</div>
                    <div style={titleDetail}>A passionate problem-solver adept at utilizing cutting-edge web technologies to create immersive, engaging and interactive experiences. Dedicated to building and supporting the community.</div>
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
                        <div style={titleAvailability}>
                            <div className="glowCircle"></div>
                            <div style={titleExtraLocationText}>
                                <p style={textParagraph}>Available for work</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={projectsStyle}>
                    <p style={projectsTitleStyle}>Projects</p>
                    <div style={projectOneStyle}>
                        {/* project one title */}
                        {/* project one detail */}
                        {/* project one link */}
                    </div>
                    <div style={projectTwoStyle}>
                        {/* project two title */}
                        {/* project two detail */}
                        {/* project two link */}
                    </div>
                </div>
            </div>
      
        
    </>
}