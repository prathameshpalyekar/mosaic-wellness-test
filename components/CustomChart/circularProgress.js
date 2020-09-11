export default (props) => {
  const sqSize = props.sqSize;
  const radius = (props.sqSize - props.strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * props.percentage / 100;

  return (
    <svg width={props.sqSize} height={props.sqSize} viewBox={viewBox} className="circular-progress">
      <circle
        className="circle-background"
        cx={props.sqSize / 2}
        cy={props.sqSize / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={props.sqSize / 2}
        cy={props.sqSize / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
        transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }} 
      />
      <text className="circle-text poppins-font" x="50%" y="50%" dy=".3em" textAnchor="middle">
        {`${Math.floor(props.percentage)}%`}
      </text>
    </svg>
  );
}
