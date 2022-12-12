import { Component } from '@angular/core';
import {IrisService} from "./iris.service";
import {
    Iris,
    ProbabilityPrediction,
    SVCParameters,
    SVCResult
} from "./types";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public svcParameters: SVCParameters = new SVCParameters();
  public svcResult: SVCResult | undefined;
  public iris: Iris = new Iris();
  public probabilityPredictions: ProbabilityPrediction[] | undefined;
  title = 'fronted-ang';

  constructor(private irisService: IrisService) {
  }



    public trainModel() {
      this.irisService.trainModel(this.svcParameters).subscribe((svcResult:any) => {
          this.svcResult = svcResult;
      });
    }

    onSearchQueryInput($event: Event) {
      //throw new Error('Method not implemented.');
      }
}
