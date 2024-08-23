import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import {
  CalendarProvider,
  ExpandableCalendar,
} from "react-native-calendars";

import { ThemedView } from '@/components/ThemedView';

const markedDates = {}

export default function Calendar({
}) {

  return (
    <ThemedView>
      <CalendarProvider date={'2024-08-23'}>
        <ExpandableCalendar
          allowShadow={false}
          disabledByDefault
          disableAllTouchEventsForDisabledDays
          futureScrollRange={6}
          markedDates={markedDates}
          markingType="multi-dot"
          pastScrollRange={6}
          firstDay={1}
          hideExtraDays
          showSixWeeks={false}
        />
        </CalendarProvider>
    </ThemedView>
  );
}
