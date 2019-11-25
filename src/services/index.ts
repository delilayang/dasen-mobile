import { Container } from 'inversify';
import Game from './Game';

const serviceContainer = new Container({ defaultScope: 'Singleton' });

serviceContainer.bind<Game>(Game).toSelf();

export default serviceContainer;
