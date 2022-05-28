import React from 'react'
import { Image } from 'styles/global';
import {
    PopularPostGrid,
    PopularPost,
    ImageBox,
    Overlay,
    InfoPost,
    CategoryDateBox,
    CategoryBox,
    DateBox,
    Title,
    Container,
    Content,
    TitlePost,
    Timestamp,
    ImageWrapper
} from './Popular.styles';

const popular = [
    {
        title: 'Создали новый язык программирования',
        date: '12.12.2022',
        category: 'Программирование',
        image: 'https://cdn.pixabay.com/photo/2022/01/13/10/24/dog-6934895_960_720.jpg'
    },
    {
        title: 'Здоровое питание',
        date: '12.12.2022',
        category: 'Питание',
        image: 'https://cdn.pixabay.com/photo/2022/05/05/21/16/transport-7177099_960_720.jpg'
    },
    {
        title: 'Нарушение международного права. Смотри, не перепутай',
        date: '12.12.2022',
        category: 'Спорт',
        image: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg'
    },
    {
        title: 'Нарушение международного права. Смотри, не перепутай',
        date: '12.12.2022',
        category: 'Путешествие',
        image: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_960_720.jpg'
    },
    {
        title: 'Нарушение международного права. Смотри, не перепутай',
        date: '12.12.2022',
        category: 'Программирование',
        image: 'https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107_960_720.jpg'
    },
]

export const PopularPostList = ({postListGrid}) => {
    return (
        <>
            {postListGrid ? (
                <PopularPostGrid>
                    {popular?.map((item, index) => (
                        <ImageBox key={index}>
                            <Image src={item.image} />
                            <Overlay>
                                <InfoPost firstTitle={index === 0}>
                                    <CategoryDateBox>
                                        <CategoryBox>{item.category}</CategoryBox>
                                        <DateBox postListGrid>{item.date}</DateBox>
                                    </CategoryDateBox>
                                    <Title firstTitle={index === 0} postListGrid>
                                        {item.title}
                                    </Title>
                                </InfoPost>
                            </Overlay>
                        </ImageBox>
                    ))}
                </PopularPostGrid>
            ) : (
                <PopularPost>
                    <Container>
                        <ImageWrapper>
                            <Image src='https://cdn.pixabay.com/photo/2022/01/13/10/24/dog-6934895_960_720.jpg' />
                        </ImageWrapper>
                        <Content>
                            <Title>Победители «Евровидения»...</Title>
                            <DateBox>22.12.2021</DateBox>
                        </Content>
                    </Container>
                     <Container>
                        <ImageWrapper>
                            <Image src='https://cdn.pixabay.com/photo/2022/04/18/13/27/yoga-7140566_960_720.jpg' />
                        </ImageWrapper>
                        <Content>
                            <Title>Группа Kalush Orchestra опубликовала клип на ...</Title>
                            <DateBox>22.12.2021</DateBox>
                        </Content>
                    </Container>
                    <Container>
                        <ImageWrapper>
                            <Image src='https://cdn.pixabay.com/photo/2022/01/13/10/24/dog-6934895_960_720.jpg' />
                        </ImageWrapper>
                        <Content>
                            <Title>The Best Indoor Plants To Create Comfort ...</Title>
                            <DateBox>22.12.2021</DateBox>
                        </Content>
                    </Container>
                    <Container>
                        <ImageWrapper>
                            <Image src='https://cdn.pixabay.com/photo/2022/01/13/10/24/dog-6934895_960_720.jpg' />
                        </ImageWrapper>
                        <Content>
                            <Title>The Best Indoor Plants To Create Comfort ...</Title>
                            <DateBox>22.12.2021</DateBox>
                        </Content>
                    </Container>
                    <Container>
                        <ImageWrapper>
                            <Image src='https://cdn.pixabay.com/photo/2022/01/13/10/24/dog-6934895_960_720.jpg' />
                        </ImageWrapper>
                        <Content>
                            <Title>The Best Indoor Plants To Create Comfort ...</Title>
                            <DateBox>22.12.2021</DateBox>
                        </Content>
                    </Container>
                </PopularPost>
            )}
        </>
    )
}

