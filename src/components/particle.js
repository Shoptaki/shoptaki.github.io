import ReactAnime from "react-animejs"
const { Anime, stagger } = ReactAnime
const path = anime.path(".motion-path-demo path")

anime({
  targets: ".motion-path-demo .el",
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  easing: "linear",
  duration: 2000,
  loop: true,
})
const FloatingParticle = () => {
  const [control, setControl] = useState(null) //controller state

  const [meta, setMeta] = useState({
    //meta state of the player
    control: control,
    progress: 0,
    currentTime: 0,
    duration: 0,
  })

  return (
    <div>
      <Anime
        control={control}
        setMeta={setMeta} // important to pull state of the player
        animeConfig={{
          autoplay: false,
          duration: 1500,
          easing: "easeInOutSine",
        }}
        initial={[
          {
            targets: ".motion-path-demo .el",
            translateX: path("x"),
            translateY: path("y"),
            rotate: path("angle"),
            easing: "linear",
            duration: 2000,
            loop: true,
          },
        ]}
      >
        <div
          className="tl_square"
          style={{ height: 50, width: 50, background: "#d3f454" }}
        />
        <div
          className="tl_circle"
          style={{
            height: 50,
            width: 50,
            background: "#d3f454",
            borderRadius: "50%",
          }}
        />
        <div
          className="tl_triangle"
          style={{
            height: 50,
            width: 50,
            background: "#d3f454",
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
          }}
        />
      </Anime>
      <div
        className="button"
        onClick={() => {
          setControl("play")
        }}
      >
        Play
      </div>
      <div
        className="button"
        onClick={() => {
          setControl("pause")
        }}
      >
        Pause
      </div>
      <div
        className="button"
        onClick={() => {
          setControl("restart")
        }}
      >
        Restart
      </div>
      <input
        type="range"
        min="1"
        max="100"
        value={meta.progress || 0}
        className="slider"
        id="myRange"
        onChange={e => console.log(setControl(["seek", e.currentTarget.value]))}
      />
    </div>
  )
}
