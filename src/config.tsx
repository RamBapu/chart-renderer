interface ITile {
  description: string;
  label: string;
  subLabel: string;
  xAxisTitle: string;
  xAxisCategories:string[];
  yAxisTitle: string;
  toolTipPointFormat: string;
  legendToggle: boolean;
  plotOptions: IPlotOptions;
  series: ISeries[];
}

interface IPlotOptions{
  area: {
    marker: {
      enabled: boolean,
      symbol: string,
      radius: number,
      states: {
        hover: {
          enabled: boolean,
        },
      },
    },
  }
}

interface ISeries {
  name: string;
  dashStyle: string;
  lineWidth: number;
  color: string;
  data: number[];
}

export const data: ITile[] = [
  {
    description: "Working hours by Working Days",
    label: "Chairman",
    subLabel: "Reporting to CEO",
    xAxisTitle: "Working Days",
    xAxisCategories: ['Mon', 'Tues', 'Wed','Thurs','Fri','Sat'],
    yAxisTitle: "Working hours",
    toolTipPointFormat:
      "Chairman had worked <b>{point.y} hours </b><br/>on {point.category} this week",
    legendToggle: false,
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        name: "{label}",
        dashStyle: "solid",
        lineWidth: 2,
        color: "#FF0000",
        data: [ 8,9.5,8.3,9,7.8,8.6 ],
      },
    ],
  },
  {
    description: "Working hours by Working Days",
    label: "Manager",
    subLabel: "Reporting to Chairman",
    xAxisTitle: "Working Days",
    xAxisCategories: ['Mon', 'Tues', 'Wed','Thurs','Fri','Sat'],
    yAxisTitle: "Working hours",
    toolTipPointFormat:
      "Manager had worked <b>{point.y} hours </b><br/>on {point.category} this week",
    legendToggle: false,
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        name: "Manager",
        dashStyle: "solid",
        lineWidth: 2,
        color: "#088F8F",
        data: [ 9.5,7.4,9,6,8.6,8 ],
      },
    ],
  },{
    description: "Working hours by Working Days",
    label: "Designer",
    subLabel: "Reporting to Manager",
    xAxisTitle: "Working Days",
    xAxisCategories: ['Mon', 'Tues', 'Wed','Thurs','Fri','Sat'],
    yAxisTitle: "Working hours",
    toolTipPointFormat:
      "Designer had worked <b>{point.y} hours </b><br/>on {point.category} this week",
    legendToggle: false,
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        name: "Designer",
        dashStyle: "solid",
        lineWidth: 2,
        color: "#1E90FF",
        data: [ 6.5,7.2,8.5,6.7,9.4,8 ],
      },
    ],
  },
  {
    description: "Working hours by Working Days",
    label: "Developer",
    subLabel: "Reporting to Manager",
    xAxisTitle: "Working Days",
    xAxisCategories: ['Mon', 'Tues', 'Wed','Thurs','Fri','Sat'],
    yAxisTitle: "Working hours",
    toolTipPointFormat:
      "Developer had worked <b>{point.y} hours </b><br/>on {point.category} this week",
    legendToggle: false,
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        name: "Developer",
        dashStyle: "solid",
        lineWidth: 2,
        color: "#1E90FF",
        data: [ 5.5,8.4,7.5,6.2,8,7 ],
      },
    ],
  }
];

