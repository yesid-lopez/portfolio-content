import {SKILL_AREA, SKILL_LEVEL} from '../enums/skills'

export default {
  name: 'journey',
  type: 'document',
  title: 'Journey',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Job title or educational title',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
      options: {
        dateFormat: 'MMM. YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'End Date',
      name: 'endDate',
      type: 'date',
      options: {
        dateFormat: 'MMM. YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Content Background',
      name: 'contentBackground',
      type: 'color',
    },
    {
      title: 'fontColor',
      name: 'fontColor',
      type: 'color',
    },
    {
      title: 'Icon Background',
      name: 'iconBackground',
      type: 'color',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
  ],
}
