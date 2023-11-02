const data = [
    {
        "day": "sun",
        "amount": 25.48
    },
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
];

$.noConflict();
jQuery($ => {
    const todayIndex = new Date().getDay();
    const maxAmount = Math.max(...data.map(item => item.amount));

    $('.bar').each((_, bar) => {
        const barElement = $(bar);
        const { amount } = data.find(item => item.day === barElement.parent().next().text());
        barElement.css('height', `${Math.round((amount / maxAmount * 100))}%`);
        barElement.children().text(amount.toFixed(2));

        if (data[todayIndex].day === barElement.parent().next().text()) {
            barElement.css('background-color', 'hsl(186, 34%, 60%)');
        }
    });
});