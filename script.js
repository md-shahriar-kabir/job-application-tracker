let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");
let jobsCount = document.getElementById("jobs");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allCard");
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById("filtered-section");


function calculateCount(){

    const totaljobs = allCardSection.children.length;

    total.innerText = totaljobs;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if(currentStatus === 'interview-filter-btn'){
        jobsCount.innerText = `${interviewList.length} of ${totaljobs}`;
    }
    else if(currentStatus === 'rejected-filter-btn'){
        jobsCount.innerText = `${rejectedList.length} of ${totaljobs}`;
    }
    else{
        jobsCount.innerText = totaljobs;
    }

    const emmtyContainer = document.getElementById("empty-container");

    if(currentStatus === 'all-filter-btn'){
        if(totaljobs === 0){
            allCardSection.classList.add('hidden');
            filterSection.classList.add('hidden');
            emmtyContainer.classList.remove('hidden');
        }else{
            emmtyContainer.classList.add('hidden');
        }
    }
    else if(currentStatus === 'interview-filter-btn'){
        if(interviewList.length === 0){
            filterSection.classList.add('hidden');
            emmtyContainer.classList.remove('hidden');
        }else{
            emmtyContainer.classList.add('hidden');
        }
    }
    else if(currentStatus === 'rejected-filter-btn'){
        if(rejectedList.length === 0){
            filterSection.classList.add('hidden');
            emmtyContainer.classList.remove('hidden');
        }else{
            emmtyContainer.classList.add('hidden')
        }
    }
}


calculateCount();

// function calculateJobs(){
    
// }


function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

    allFilterBtn.classList.add('bg-white', 'text-black/50');
    interviewFilterBtn.classList.add('bg-white', 'text-black/50');
    rejectedFilterBtn.classList.add('bg-white', 'text-black/50');
    
    const selected = document.getElementById(id);
    currentStatus = id;
      
    selected.classList.remove('bg-white', 'text-black/50');
    selected.classList.add('bg-blue-500', 'text-white');

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }else if(id== 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if(id=='rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
    calculateCount();
}

mainContainer.addEventListener('click', function(event){

    if(event.target.classList.contains('interview-btn')){
        const parenNode = event.target.parentNode.parentNode;

        const jobsName = parenNode.querySelector('.jobsName').innerText;
        const jobsDescription = parenNode.querySelector('.jobsDescription').innerText;
        const selary = parenNode.querySelector('.selary').innerText;
        const statu = parenNode.querySelector('.statu').innerText;
        const notes = parenNode.querySelector('.notes').innerText;

         const statusModifid = parenNode.querySelector('.statu');
        statusModifid.innerText = 'INTERVIEW';
        statusModifid.className = 'statu px-3 py-2 rounded-sm inline-block';
        statusModifid.classList.add(
            'text-green-600',
            'bg-green-100',
            'border',
            'border-green-6000'
        )

        const cardInfo ={
            jobsName,
            jobsDescription,
            selary,
            statu:'INTERVIEW',
            notes
        }
        
        const jobsExist = interviewList.find(item=> item.jobsName == cardInfo.jobsName);

                
        if(!jobsExist){
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item=> item.jobsName != cardInfo.jobsName)
                
        calculateCount();

        if(currentStatus == "rejected-filter-btn"){
            renderRejected();
        }

        
    }else if(event.target.classList.contains('rejected-btn')){
        const parenNode = event.target.parentNode.parentNode;

        const jobsName = parenNode.querySelector('.jobsName').innerText;
        const jobsDescription = parenNode.querySelector('.jobsDescription').innerText;
        const selary = parenNode.querySelector('.selary').innerText;
        const statu = parenNode.querySelector('.statu').innerText;
        const notes = parenNode.querySelector('.notes').innerText;

        const statusModifid = parenNode.querySelector('.statu');
        statusModifid.innerText = 'REJECTED';
        statusModifid.className = 'statu px-3 py-2 rounded-sm inline-block';
        statusModifid.classList.add(
            'text-red-600',
            'bg-red-100',
            'border',
            'border-red-6000'
        )
        

        const cardInfo ={
            jobsName,
            jobsDescription,
            selary,
            statu:'REJECTED',
            notes
        }
        
        const jobsExist = rejectedList.find(item=> item.jobsName == cardInfo.jobsName);

                
        if(!jobsExist){
            rejectedList.push(cardInfo)
        }

        interviewList = interviewList.filter(item=> item.jobsName != cardInfo.jobsName)

        if(currentStatus == "interview-filter-btn"){
            renderInterview();
        }

        calculateCount();
    }else if(event.target.closest('.btn-delete')){
        const cart = event.target.closest('.cart');
        const jobsName = cart.querySelector('.jobsName').innerText;

        const isconfirmed = confirm(`Are you sure to delete "${jobsName}" ?`);

        if(!isconfirmed){
            return;
        }
        interviewList = interviewList.filter(item => item.jobsName !== jobsName);
        rejectedList = rejectedList.filter(item => item.jobsName !== jobsName);
        cart.remove();

        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }else if(currentStatus === 'rejected-filter-btn'){
            renderRejected();
        }
        calculateCount();        
    }    
})

