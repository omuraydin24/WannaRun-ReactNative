import React from 'react';
import { View } from 'react-native';
import HistoryDetailLayout from './HistoryDetailLayout';

const HistoryDetail = ({ route }) => {
  const detailData = route.params;

  return (
    <View>
      <HistoryDetailLayout detailData={detailData} />
    </View>
  );
}
export default HistoryDetail;
