const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: height,
            marginTop: ".5rem",
            marginBottom: ".5rem"
        }}
    />
);

export default ColoredLine;