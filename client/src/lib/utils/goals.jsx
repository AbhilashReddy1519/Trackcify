export const GOALS = [
  {
    id: 'strength',
    label: 'Build strength',
    icon: <i className="fa-solid fa-dumbbell"></i>,
  },
  {
    id: 'weight',
    label: 'Lose weigth',
    icon: <i className="fa-solid fa-weight-scale"></i>,
  },
  {
    id: 'health',
    label: 'Improve health',
    icon: <i className="fa-solid fa-heart"></i>,
  },
  {
    id: 'consistent',
    label: 'Be consistent',
    icon: <i className="fa-solid fa-calendar-check"></i>,
  },
  {
    id: 'fit',
    label: 'Look more fit',
    icon: <i className="fa-regular fa-face-laugh-wink"></i>,
  },
  {
    id: 'confidence',
    label: 'Increase confidence',
    icon: <i className="fa-solid fa-stairs"></i>,
  },
  {
    id: 'manage',
    label: 'Manage peri/menopause',
    icon: <i className="fa-solid fa-person-circle-check"></i>,
  },
  {
    id: 'exercise',
    label: 'Enjoy Exercise',
    icon: <i className="fa-solid fa-person-walking"></i>,
  },
  {
    id: 'age',
    label: 'Age gracefully',
    icon: <i className="fa-solid fa-image-portrait"></i>,
  },
];

export const getGoalsById = id => {
  return GOALS.find(goal => goal.id === id);
};

export const getLabelById = id => {
  const goal = getGoalsById(id);
  return goal ? goal.label : id;
};

export const getGoalById = id => {
  return GOALS.filter(goal => goal.id === id);
}
