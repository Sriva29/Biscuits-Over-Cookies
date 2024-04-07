import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const BusinessPlanPDF = ({ businessPlan }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Import Business Plan</Text>
      </View>
      <View style={styles.section}>
        <Text>{businessPlan}</Text>
      </View>
    </Page>
  </Document>
);

export default BusinessPlanPDF;
