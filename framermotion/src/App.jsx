import {motion} from 'framer-motion'

function App() {

  return (
    <div style={{height:"100vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
      <motion.div
        initial={{ x: 0, y: 0 ,rotateX:0}}
        animate={{ x: 300,y:-200, rotateX:360}}

        transition={{
          delay:1,
          borderRadius:"100%"
        }}

        whileHover={{
          borderRadius:"100%",
          backgroundColor:"red",
          scale:1.5
        }}
        style={{backgroundColor:"orange", width:"200px", height:"200px", cursor:"pointer", boxShadow:"1px 2px 10px 2p #e74c3c"}}

      >
        
      </motion.div>
      </div>
  )
}

export default App
