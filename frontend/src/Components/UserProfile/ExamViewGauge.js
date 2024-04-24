import React from 'react'
import { useContext } from 'react';

import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

import { SpecificQuizContext } from '../../Pages/UserProfile';

function ExamViewCauge() {

    const { questionViewData } = useContext(SpecificQuizContext);

    return (
        <Gauge
            width={180}
            height={120}
            outerRadius={80}
            innerRadius={55}
            value={Math.round(questionViewData.questions.filter(question => question.isCorrect).length / questionViewData.questions.length *100)}
            cornerRadius={'20px'}
            startAngle={-110}
            endAngle={110}
            sx={(theme) => ({
                
                [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 35,
                    fontWeight: 600
                },
                [`& .${gaugeClasses.valueArc}`]: {
                    fill: '#8DF4A9',
                },
                
                [`& .${gaugeClasses.referenceArc}`]: {
                    fill: '#FF7C7C',
                },
            })}
            text={
                ({value}) => `${value}%`
            }
        />
    );
}

export default ExamViewCauge;