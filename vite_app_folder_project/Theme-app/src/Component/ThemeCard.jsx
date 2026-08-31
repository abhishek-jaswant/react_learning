
const ThemeCard = (props) => {
    const { theme, handleTheme } = props;
    const box=[{first:"this is first",second:"this is second",third:"this is third"},{first:"this is first",second:"this is second",third:"this is third"},{first:"this is first",second:"this is second",third:"this is third"}]
    return (
        < >
           <header
  style={{
    border: "1px solid black",
    width: "100%",
    height: "60px",
    margin: "0",
    padding: "0 20px",
    boxSizing: "border-box",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    boxShadow:
      theme === "light"
        ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
        : "0px 4px 8px rgba(255, 255, 255, 0.1)",

    backgroundColor: theme === "light" ? "white" : "black",
  }}
>
  <h1
    style={{
      fontSize: "20px",
      color: theme === "light" ? "black" : "white",
      margin: 0,
    }}
  >
    Theme Card
  </h1>

  <p
    style={{
      fontSize: "16px",
      color: theme === "light" ? "black" : "white",
      margin: 0,
    }}
  >
    Theme is {theme}
  </p>

  <button
    style={{
      backgroundColor: theme === "light" ? "black" : "white",
      color: theme === "light" ? "white" : "black",
      border: "none",
      borderRadius: "10px",
      padding: "8px 15px",
      width: "100px",
      height: "40px",
      cursor: "pointer",
    }}
    onClick={handleTheme}
  >
    Toggle Theme
  </button>
</header>
            <main style={{gap:"20px",display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"5px"}}>
                {box.map((item, index) =>
                <div key={index} style={{ border: theme=="light"? "1px solid black":"1px solid white", width: "300px", height: "200px", margin: "auto", textAlign: "center", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", backgroundColor: theme=="light"?"white":"black", boxShadow: theme=="light"?"2px 2px 2px 2px #007bff":"2px 2px 2px 2px #dc3545", padding: "20px", alignItems: "center", justifyContent: "center",

    overflowWrap: "break-word",
    wordBreak: "break-word",
    whiteSpace: "normal", }}>
                <h2 style={{fontSize:"30px",color:theme=="light"?"black":"white"}}>{item.first}</h2>
                <p style={{fontSize:"30px",color:theme=="light"?"black":"white"}}>{item.second}</p>
                <p style={{fontSize:"30px",color:theme=="light"?"black":"white"}}>{item.third}</p>
                </div>)}
            </main>
        </>
    )
}
export default ThemeCard