
import { Inject, Injectable,Component, OnInit } from '@angular/core';
import { User } from './domain/user';
import { UserService } from './services/userservice';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Message } from 'primeng/components/common/api';



export class PirmeUser implements User {
    constructor(public name?,public password?,public correo?,public twitter?,public admin?){}
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit {

    displayDialog: boolean;
    user:any;
    pass:any;

    cols: any[];
    display: boolean = false;
    responselogin:any;
    mensaje: string;
    displaymsj: any;
    theUser:any;
    msgs: Message[] = [];
    

    constructor(private userService: UserService,@Inject(SESSION_STORAGE) private storage: StorageService) { 
        this.displaymsj = {success:false,token:''};
        this.theUser = {name:''}

    }



    ngOnInit() {
        console.log(this.storage.get("token"));
        if(this.storage.get("token")){
                        
            var _data = {name:this.storage.get("name"),token:this.storage.get("token")};
            this.displaymsj.success = false;
            
            this.userService.getUser(_data).then(user => {
                if(user == null || !user.success)
                {
                 this.storage.clear();
                 this.displaymsj = {success:false,token:''};
                }else{
                 this.theUser = user;
                }
            });
        }
       
    }

    showDialog() {
        this.display = true;
    }

    login() {
        
        var _data = {name:this.user,password:this.pass,token:''};
        this.userService.postLogin(_data)
        .then(displaymsj => {
            this.displaymsj = displaymsj
            this.display = !this.displaymsj.success;
            this.storage.set("token", this.displaymsj.token);
            this.storage.set("name", this.user);
            _data.token = this.displaymsj.token;
            
            //Traemos los datos del usuario
            this.userService.getUser(_data).then(user => {
                  this.theUser= user;
            });

        } );
    }

    logout() {
        this.displaymsj.success = false;
        this.storage.clear();
    }

    guardando(){
        console.log("intentano guardar!!");
        console.log(this.theUser);
        this.theUser.token = this.storage.get("token");
        this.userService.postGuarda(this.theUser).then(user => {
                  console.log("!!Upodate"+ user);
                  this.msgs.push({severity:'info', summary:'Aviso', detail:'El registro se actualizo'});
            });
    }

}
