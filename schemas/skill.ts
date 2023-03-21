import {SKILL_AREA, SKILL_LEVEL} from '../enums/skills'

export default {
  name: 'skill',
  type: 'document',
  title: 'Skill',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'area',
      type: 'string',
      title: 'Area',
      initialValue: SKILL_AREA.QUALITY_ASSURANCE,
      options: {
        list: [
          SKILL_AREA.MACHINE_LEARNING,
          SKILL_AREA.QUALITY_ASSURANCE,
          SKILL_AREA.SOFTWARE_DEVELOPMENT,
        ],
      },
    },
    {
      name: 'level',
      type: 'string',
      title: 'Level',
      initialValue: SKILL_LEVEL.IMPROVER,
      options: {
        list: [SKILL_LEVEL.IMPROVER, SKILL_LEVEL.INTERMEDIATE, SKILL_LEVEL.ADVANCED],
      },
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
  ],
}
