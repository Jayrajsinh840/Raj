import myfile=require("./one");
import myfile1=require("./two");
import myfile2=require("./three");

function mainshow(a){
    a.show();
}
mainshow(new myfile1.def());
mainshow(new myfile2.mno());
