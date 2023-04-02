import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFSFirestoreData } from './store/actions/firestore-data.actions';
import { FsState } from './store/reducers/firestore-data.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {
  constructor(private store: Store<FsState>) {}

  ngOnInit(): void {
    this.store.dispatch(getFSFirestoreData());
    console.log('test');
  }

  title = 'Angular-Holiday-Planner';
}
