export const GOALS = [
  {
    id: 'strength',
    label: 'Build strength',
    icon: <i className="fa-solid fa-dumbbell transform rotate-45"></i>,
  },
  {
    id: 'weight',
    label: 'Lose weigth',
    icon: <i class="fa-solid fa-weight-scale"></i>,
  },
  {
    id: 'health',
    label: 'Improve health',
    icon: <i class="fa-solid fa-heart"></i>,
  },
  {
    id: 'consistent',
    label: 'Be consistent',
    icon: <i class="fa-solid fa-calendar-check"></i>,
  },
  {
    id: 'fit',
    label: 'Look more fit',
    icon: <i class="fa-regular fa-face-laugh-wink"></i>,
  },
  {
    id: 'confidence',
    label: 'Increase confidence',
    icon: <i class="fa-solid fa-stairs"></i>,
  },
  {
    id: 'manage',
    label: 'Manage peri/menopause',
    icon: <i class="fa-solid fa-person-circle-check"></i>,
  },
  {
    id: 'exercise',
    label: 'Enjoy Exercise',
    icon: <i class="fa-solid fa-person-walking"></i>,
  },
  {
    id: 'age',
    label: 'Age gracefully',
    icon: <i class="fa-solid fa-image-portrait"></i>,
  },
];

export const getGoalsById = id => {
  return GOALS.find(goal => goal.id === id);
};

export const getLabelById = id => {
  const goal = getGoalsById(id);
  return goal ? goal.label : id;
};
