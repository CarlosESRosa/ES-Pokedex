module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('users',
        [{
            username: 'Carlos',
            password: '$2b$10$Dnz1OsNB2sYB7lAkxZdsXuwfYyNCmAFhaVtp097/TztUtpnI3R4Si', // Carlospass1
        },
        {
            username: 'Tiago',
            password: '$2b$10$8tixwu4/aQbNgkMnA56wYeDllDt0gjLuiFXPX8TXfRk2JRQzHFAYS', // Tiagopass1
        },
        {
          username: 'Rafael',
          password: '$2b$10$cDqok/Zs0TSN1Qf5FJW4TeyLfJvdOQAkA0Y7.W2aISe.cAjNevZXO', // Rafaelpass1
        },
        {
          username: 'Filipe',
          password: '$2b$10$Ymdm09Cp.3xgDhhcHdTR4OFypSmwNpFmTOGJj4j0pMOigk0hJtouC', // Filipepass1
        },
        {
          username: 'Julia',
          password: '$2b$10$0hY9O4KGSagwrlwTbrRTJOLHoN.bBywjxDXTHlVjdyOakRyRhQGZC', // Juliapass1
        },
        ], { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
    },
  };
  