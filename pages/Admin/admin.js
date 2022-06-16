var delBtns = document.querySelectorAll('.del-btn')

delBtns.forEach((btn)=>{
    btn.onclick=function(e) {
        var btnTh= e.target.parentNode
        var deletedRow = btnTh.parentNode

        deletedRow.innerHTML=''
    }
})