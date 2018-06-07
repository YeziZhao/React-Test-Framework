import _ from 'lodash';
function planListToOption(planList) {
    let rPlanList = [];
    _.map(planList, (product, key) => {
        rPlanList.push({
            text: product.name,
            value: product.code
        });
    });
    return rPlanList;
}
export default planListToOption;