import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const MyPie = ({ capacity = 100, assistants = 10 }) => (
    <div style={{ height: '400px' }}>
        <ResponsivePie
            data={[
                {
                    id: "aforo",
                    label: "Aforo",
                    value: capacity,

                },
                {
                    id: "assistants",
                    label: "Asistentes",
                    value: assistants,
                }
            ]}
            colors={['#85000076', '#99fff110']}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.6}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={3}
            borderColor={['#ffffff', '#ffffff']}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#ffffff"
            arcLinkLabelsThickness={0}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}

            defs={[
                {

                    type: 'patternDots',
                    background: 'inherit',
                    color: '#ffffff',
                    size: 4,
                    padding: 2,
                    stagger: true,
                },
                {

                    type: 'patternLines',
                    background: 'inherit',
                    color: '#ffffff',

                    lineWidth: 1,
                    spacing: 10,
                },
            ]}
            fill={[
                { match: { id: 'aforo' }, id: 'dots', },

                { match: { id: 'assistants' }, id: 'lines' }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 28,
                    itemTextColor: '#ffffff',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 8,
                    symbolShape: 'circle',
                },
            ]}
        />
    </div>
);

export default MyPie;
