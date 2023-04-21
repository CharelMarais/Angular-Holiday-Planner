// Calendar created by Allen Kim
// https://medium.com/allenhwkim/angular-build-a-calendar-in-50-lines-f813f0a04c3b
// 'Here is the working demo. Please feel free to steal the code.' - Allen Kim

import { Component, Input, OnInit } from '@angular/core';
import { IItineraryItem } from 'src/app/models/itinerary-item';
import fromUnixTime from 'date-fns/fromUnixTime';
const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  dates: Array<Date>;
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  date = new Date();
  @Input() itinerary?: IItineraryItem[] | null;
  startDate = 32501076447;
  endDate = 0;

  constructor() {
    this.dates = this.getCalendarDays(this.date);
  }

  ngOnInit(): void {
    for (const itineraryItem of this.itinerary || []) {
      if (itineraryItem.startDate < this.startDate) {
        this.startDate = itineraryItem.startDate;
      }
      if (itineraryItem.endDate > this.endDate) {
        this.endDate = itineraryItem.endDate;
      }
    }
  }

  tripActiveOnDay(date: Date) {
    return (
      date >= fromUnixTime(this.startDate) && date <= fromUnixTime(this.endDate)
    );
  }

  setMonth(inc: number) {
    const [year, month] = [this.date.getFullYear(), this.date.getMonth()];
    this.date = new Date(year, month + inc, 1);
    this.dates = this.getCalendarDays(this.date);
  }

  isSameMonth(date: Date) {
    return date.getMonth() === this.date.getMonth();
  }

  private getCalendarDays(date = new Date()) {
    const calendarStartTime =
      this.getCalendarStartDay(date)!.getTime() +
      60 * 60 * 2 * 1000; /* add 2 hours for day light saving time adjustment */

    return this.range(0, 41).map(
      (num) => new Date(calendarStartTime + DAY_MS * num)
    );
  }

  private getCalendarStartDay(date = new Date()) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();

    return this.range(1, 7)
      .map((num) => new Date(firstDayOfMonth - DAY_MS * num))
      .find((dt) => dt.getDay() === 0);
  }

  private range(start: number, end: number, length = end - start + 1) {
    return Array.from({ length }, (_, i) => start + i);
  }
}
