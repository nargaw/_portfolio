export default function Environment()
{
    return <>
        {/* <ambientLight intensity={0.015}/> */}
        <pointLight position={[0, 0, 25]} intensity={80.25} color={0xff0000}/>
        <pointLight position={[0, 0, 0]} intensity={80.75} color={0xffffff}/>
        <pointLight position={[0, 0, 25]} intensity={80.25} color={0xff0000}/>
        <pointLight position={[0, 0, 20]} intensity={80.75} color={0xffffff}/>
    </>
}