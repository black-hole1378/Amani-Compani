import { Typography, styled, Box } from "@mui/material";

export const FLEX = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled(Typography)`
  color: #2193f0;
  font-size: 1.3rem;

  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

export const IconContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const englishData = (content) => {
  const data = [
    {
      name: content.english_reliable,
      img: content.reliable_icon.data.attributes.url,
      id: 1,
    },
    {
      name: content.english_affordable,
      img: content.affordable_icon.data.attributes.url,
      id: 2,
    },
    {
      name: content.english_experianced,
      img: content.expert_icon.data.attributes.url,
      id: 3,
    },
    {
      name: content.english_call_service,
      img: content.call_icon.data.attributes.url,
      id: 4,
    },

    {
      name: content.english_customer,
      img: content.customer_icon.data.attributes.url,
      id: 4,
    },
  ];
  return { data };
};

export const persianData = (content) => {
  const data = [
    {
      name: content.persian_reliable,
      img: content.reliable_icon.data.attributes.url,
      id: 1,
    },
    {
      name: content.persian_affordable,
      img: content.affordable_icon.data.attributes.url,
      id: 2,
    },
    {
      name: content.persian_experianced,
      img: content.expert_icon.data.attributes.url,
      id: 3,
    },
    {
      name: content.persian_call_service,
      img: content.call_icon.data.attributes.url,
      id: 4,
    },

    {
      name: content.persian_customer,
      img: content.customer_icon.data.attributes.url,
      id: 4,
    },
  ];
  return { data };
};

export const chineseData = (content) => {
  const data = [
    {
      name: content.chinese_reliable,
      img: content.reliable_icon.data.attributes.url,
      id: 1,
    },
    {
      name: content.chinese_affordable,
      img: content.affordable_icon.data.attributes.url,
      id: 2,
    },
    {
      name: content.chinese_experianced,
      img: content.expert_icon.data.attributes.url,
      id: 3,
    },
    {
      name: content.chinese_call_service,
      img: content.call_icon.data.attributes.url,
      id: 4,
    },

    {
      name: content.chinese_customer,
      img: content.customer_icon.data.attributes.url,
      id: 4,
    },
  ];
  return { data };
};
