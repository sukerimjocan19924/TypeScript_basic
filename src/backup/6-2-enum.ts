enum Status{
    Pending="PENDING",
    Approved="APPROVED",
    Rejected="REJECTED"
}

const getStatusMessage = (status: Status):string=>{

    switch (status){
        case Status.Pending:
            return "대기중입니다"
        case Status.Approved:
            return "승인되었습니다"
        case Status.Rejected:
            return "거절되었습니다"
    }

}
console.log(getStatusMessage(Status.Rejected))