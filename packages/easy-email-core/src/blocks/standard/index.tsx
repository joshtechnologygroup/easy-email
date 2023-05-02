import { IPage, Page } from './Page';
import { ISection, Section } from './Section';
import { Column, IColumn } from './Column';
import { IText, Text } from './Text';
import { IImage, Image } from './Image';
import { Group, IGroup } from './Group';
import { Button, IButton } from './Button';
import { Divider, IDivider } from './Divider';
import { IWrapper, Wrapper } from './Wrapper';
import { ISpacer, Spacer } from './Spacer';
import { Carousel, ICarousel } from './Carousel';
import { Hero, IHero } from './Hero';
import { Navbar, INavbar } from './Navbar';
import { ISocial, Social } from './Social';
import { Raw, IRaw } from './Raw';
import { Template, ITemplate } from './Template';

import { Accordion, IAccordion } from './Accordion';
import { AccordionElement, IAccordionElement } from './AccordionElement';
import { AccordionTitle, IAccordionTitle } from './AccordionTitle';
import { AccordionText, IAccordionText } from './AccordionText';
import { Table, ITable } from './Table';
import { BasicType } from '@core/constants';
import { CustomText, ICustomText } from './CustomText';
import { EmptyPage } from './EmptyPage';
import { PodCustomPage } from './PodCustomPage';
import { News, INews } from './News';
import { Heading, IHeading } from './Heading';
import { PostCard, IPostCard } from './PostCard';
import { ThankyouCard, IThankyouCard } from './ThankyouCard';
import { RoundedButton, IRoundedButton } from './RoundedButton';
import { QuoteCard } from './Quote';

export const standardBlocks = {
  [BasicType.PAGE]: Page,
  [BasicType.SECTION]: Section,
  [BasicType.COLUMN]: Column,
  [BasicType.TEXT]: Text,
  [BasicType.IMAGE]: Image,
  [BasicType.GROUP]: Group,
  [BasicType.BUTTON]: Button,
  [BasicType.DIVIDER]: Divider,
  [BasicType.WRAPPER]: Wrapper,
  [BasicType.SPACER]: Spacer,
  [BasicType.RAW]: Raw,
  [BasicType.CAROUSEL]: Carousel,
  [BasicType.HERO]: Hero,
  [BasicType.NAVBAR]: Navbar,
  [BasicType.SOCIAL]: Social,

  // spacial block, render string
  [BasicType.TEMPLATE]: Template,

  // TODO:

  [BasicType.ACCORDION]: Accordion,
  [BasicType.ACCORDION_ELEMENT]: AccordionElement,
  [BasicType.ACCORDION_TITLE]: AccordionTitle,
  [BasicType.ACCORDION_TEXT]: AccordionText,

  [BasicType.TABLE]: Table,
  [BasicType.CUSTOM_TEXT]: CustomText,
  [BasicType.EMPTY_PAGE]: EmptyPage,
  [BasicType.POD_CUSTOM_PAGE]: PodCustomPage,
  [BasicType.NEWS]: News,
  [BasicType.HEADING]: Heading,
  [BasicType.POST_CARD]: PostCard,
  [BasicType.ROUNDED_BUTTON]: RoundedButton,
  [BasicType.THANKYOU_CARD]: ThankyouCard,
  [BasicType.QUOTE_CARD]: QuoteCard,
};

export type {
  IPage,
  ISection,
  IWrapper,
  IColumn,
  IGroup,
  IText,
  ITable,
  IImage,
  IButton,
  IDivider,
  ISpacer,
  ICarousel,
  IHero,
  ISocial,
  INavbar,
  IRaw,
  IAccordion,
  IAccordionElement,
  IAccordionTitle,
  IAccordionText,
  ITemplate,
  ICustomText,
  INews,
  IHeading,
  IPostCard,
  IRoundedButton,
  IThankyouCard,
};
