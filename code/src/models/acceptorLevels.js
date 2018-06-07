import  M  from  '../services/messages';
const acceptorLevels = [
    {
        text: M.COMPOSE_SENDINFOSETTING_ADMIN,
        value: 'ADMIN'
    },
    {
        text: `${M.COMPOSE_SENDINFOSETTING_ALL} ${M.COMPOSE_SENDINFOSETTING_ALL_DETAIL}`,
        value: 'ALL'
    }
];

export default acceptorLevels;