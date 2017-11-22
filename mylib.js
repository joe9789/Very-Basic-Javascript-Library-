"use strict mode";
/**
 * ampersand.js
 * wrapping up the function so that it will have access to the global(window)
 * object and the jQuery object.
 */
(function(global,$){
    var myLibrary=function(fname,lname,lang){
        return new  myLibrary.init(fname,lname,lang);
    }
    /*vars available only within this IIFE*/
    //available languages
    var supLangs=['en','es','hn','ta','mal','kan','fr','chi','ur','ar'];
    
        var hello={
            en:'Hello',
            es:'hHola',
            hn:'नमस्ते',
            ta:'வணக்கம்',
            kan:'',
            mal:'',
            kan:'',
            fr:'',
            chi:'',
            ur:'',
            ar:''
        };
    
        var fhello={
            en:'Greetings',
            es:'Saludos',
            hn:'',
            ta:'',
            kan:'',
            mal:'',
            kan:'',
            fr:'',
            chi:'',
            ur:'',
            ar:''
        };
    
        var loggMsg={
            en:'logged In..',
            es:'conectado..',
            hn:'',
            ta:'',
            kan:'',
            mal:'',
            kan:'',
            fr:'',
            chi:'',
            ur:'',
            ar:''
        };
    //adding functionalities with prototype propertie
    myLibrary.prototype={
        //returns full name of the invoking object
        fullName:function(){
            return this.fname+" "+this.lname;
        },
        //validates whether the given languages
        validate:function(){
            if(supLangs.indexOf(this.lang)===-1){
                throw ("Invalid Language,not supported by the library");
        }
    },
        //function returns normal greeting for the invoking object names
        greeting:function(){
            return hello[this.lang]+" "+this.fname;
        },
        //returns formal greeting for the invoking object names
        fgreeting:function(){
            return fhello[this.lang]+" "+this.fullName();
        },
        //returns both formal and casual greeting, for formal greeting
        //pass the parameters chainable method
        greet:function(formal){
            var msg;

            if(formal){
                msg= this.fgreeting();
            }
            else{
                msg=this.greeting();
            }
            if(console){
                console.log(msg);
            }
            /**
             * this refers to the calling object at execution time
             * thus making method chainable
             */
            return this;
        },
        //logs the object names in the console
        //if the console is not available it is coarses to false
        //and ignores this function
        //note:-does not work for other language fonts eg:-hindi,tamil,etc
        log:function(){
            if(console){
                console.log(loggMsg[this.lang]+':'+this.fullName());
            }

            return this;
        },
        //sets the language on the run,chainable method
        setLanguage:function(lang){
            this.lang=lang;

            this.validate();

            return this;
        },
        //jQuery support,accepts selector and the jQuery object
        //and writes to the dom according to jQuery functions
        HTMLGreet:function(selector,formal){
            var msg;
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'selector is not given';
            }
            if(formal){
                msg=this.fgreeting();
            }
            else{
                msg=this.greeting();
            }
                $(selector).htmyLibrary(msg);
                return this;
            },
        
            
    };
    //setting the variables  for the objects
    myLibrary.init=function(fname,lname,lang){
        var self=this;
        //setting up default values
        self.fname=fname||'';
        self.lname=lname||'';
        self.lang=lang||'en';

        self.validate();

    }

   
    /**
     * makes sure that the the init property have access to all of
     * the method in prototype
     */
    myLibrary.init.prototype=myLibrary.prototype;
    /**
     * making alias for the library object '_myLibrary'
     */
    global.myLibrary=global._ml=myLibrary;
}(window,jQuery));