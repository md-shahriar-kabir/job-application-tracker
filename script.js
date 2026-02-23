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

