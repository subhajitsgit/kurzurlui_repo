import { Component } from "@angular/core";
import * as data from "../../../shared/data/data/ui-kits/helper-class";
import { BorderColorComponent } from "./border-color/border-color.component";
import { CommonHelperClassComponent } from "./common-helper-class/common-helper-class.component";
import { CommonMarginPaddingComponent } from "./common-margin-padding/common-margin-padding.component";
import { FontSizesComponent } from "./font-sizes/font-sizes.component";
import { FontStyleComponent } from "./font-style/font-style.component";
import { FontWidthHelperComponent } from "./font-width-helper/font-width-helper.component";
import { ImagesSizesComponent } from "./images-sizes/images-sizes.component";
import { MarginComponent } from "./margin/margin.component";
import { PaddingComponent } from "./padding/padding.component";
import { TextColorsComponent } from "./text-colors/text-colors.component";

@Component({
  selector: "app-helper-classes",
  standalone: true,
  imports: [BorderColorComponent, CommonHelperClassComponent, CommonMarginPaddingComponent,
    FontSizesComponent, FontStyleComponent,FontWidthHelperComponent,
    ImagesSizesComponent, MarginComponent, PaddingComponent, TextColorsComponent
  ],
  templateUrl: "./helper-classes.component.html",
  styleUrls: ["./helper-classes.component.scss"],
})

export class HelperClassesComponent {

  public StyleBorderData = data.StyleBorderData;
  public BorderAndDisplayData = data.BorderAndDisplayData;
  public backgroundColorsData = data.backgroundColorsData;
  public SidePadding = data.SidePadding;
  public SideMargin = data.SideMargin;

}
