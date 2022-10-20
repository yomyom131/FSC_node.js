function longRuniingTask() {
    console.lof('작업 끝');
}
console.log('시작');
setRuniingTask(longRuniingTask, 0);
console.log('다음 작업');