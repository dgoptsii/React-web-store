import { ResponsivePie } from '@nivo/pie';
import '../styles/main.css';

const data = [
  {
    id: 'funny',
    label: 'funny',
    value: 476,
  },
  {
    id: 'super funny',
    label: 'super funny',
    value: 415,
  },
  {
    id: 'not funny',
    label: 'not funny',
    value: 16,
  },
  {
    id: 'mega funny',
    label: 'mega funny',
    value: 219,
  },
];
const Charts = () => (
  <>
    <div className="chart d-flex flex-column justify-content-center align-items-center mb-4">
      <span className="text-light">Meme statistics</span>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={12}
        colors={{ scheme: 'pastel2' }}
        borderWidth={1}
        borderColor={{ theme: 'background' }}
        enableArcLinkLabels={false}
        arcLinkLabel="value"
        arcLinkLabelsSkipAngle={9}
        arcLinkLabelsTextColor="#000000"
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabel="id"
        arcLabelsRadiusOffset={0.45}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', '2.4']] }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'mega funny',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'funny',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'super funny',
            },
            id: 'lines',
          },
        ]}
        legends={[]}
      />
    </div>
  </>
);
export default Charts;
