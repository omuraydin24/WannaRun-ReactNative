import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HistoryDetailLayout from './HistoryDetailLayout';

const HistoryDetail = ({ route }) => {
  const detailData = route.params;
  console.log("detailData", detailData)


  return (
    <View>
      <HistoryDetailLayout detailData={detailData} />
    </View>
  );
}

export default HistoryDetail;
