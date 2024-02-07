export default function SinglePage()
{

    const header = {
        alignItems: 'flex-start',
        display: 'flex',
        flex: 'none',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '16px'
    }

    const titleStyle = {
        fontFamily: "Inter, sans-serif",
        color: "#f5f5f7",
        fontStyle: "italic",
        fontSize: "36px"
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

    return <>
        <div style={header}>
            <h1 style={titleStyle}>Nate Argaw</h1>
            <div style={titleDescription}>3D Front-end developer</div>
            <div style={titleDetail}>Passionate about solving real-world problems using software. Adept at utilizing cutting-edge web technologies to create immersive, engaging and interactive experiences. Dedicated to building and supporting the community.</div>
        </div>
        
    </>
}