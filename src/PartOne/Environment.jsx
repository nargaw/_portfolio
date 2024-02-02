export default function Environment()
{
    return <>
        <ambientLight intensity={0.015}/>
        <pointLight position={[0, 10, 25]} intensity={.25} color={0xff0000}/>
        <pointLight position={[0, -10, 25]} intensity={0.75} color={0xffffff}/>
    </>
}