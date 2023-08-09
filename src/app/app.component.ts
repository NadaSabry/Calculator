import { Component, OnInit } from '@angular/core';
import { ThemesService } from './Services/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';
  bg="";
  color="";
  togglebg="";
  circlebg=this.theme.keybgtoggle;
  ishidden1=true;
  ishidden2=false;
  ishidden3=false;

  constructor(private theme : ThemesService){
    this.bg=theme.mainbg;
    this.color=theme.texttop;
    this.togglebg=theme.togglebg_keypadbg;
 }

  toggleTheme(themenum:any){
     this.theme.toggleMode(themenum);
     this.bg=this.theme.mainbg;
     this.color=this.theme.texttop;
     this.togglebg=this.theme.togglebg_keypadbg;
     this.circlebg=this.theme.keybgtoggle;
     
     if(themenum==1){
      this.ishidden1=true;
      this.ishidden2=false;
      this.ishidden3=false;
     }
     else if(themenum==2){
      this.ishidden1=false;
      this.ishidden2=true;
      this.ishidden3=false;
     }
     else{
      this.ishidden1=false;
      this.ishidden2=false;
      this.ishidden3=true;
     }

      /*
      let divcircle=document.querySelectorAll(".circle") as NodeListOf<HTMLElement>;
      console.log(divcircle[themenum-1],"...");


      divcircle.forEach((circ,index)=>{
        if(index==themenum-1){
          circ.addEventListener("mouseover",()=>{
            circ.style.backgroundColor=this.theme.keybgandtoggleshadow;
          });
            circ.addEventListener("mouseout", () => {
            circ.style.backgroundColor = this.theme.keybgtoggle; // Reset the background color when mouse moves away
          });
        }
        else{
          circ.style.backgroundColor="";
        }
      }) 
      */
   }  
}

