import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Example data retrieval
    const exampleData = {
      yes: 30,
      no: 70,
    };

    setData(exampleData);
  }, []);

  return (
    <View>
      {data && (
        <BarChart
          data={{
            labels: ['Yes', 'No'],
            datasets: [
              {
                data: [data.yes, data.no],
              },
            ],
          }}
          width={screenWidth}
          height={220}
          yAxisLabel="Value"
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
        />
      )}
    </View>
  );
};

export default App;
