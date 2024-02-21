FROM ubuntu:latest
ARG DEBIAN_FRONTEND="noninteractive"

RUN apt update && apt list --upgradable -a && apt upgrade -y
RUN apt update && apt install -y xz-utils software-properties-common cmake make build-essential git curl wget jq sudo procps zsh tar screen ca-certificates procps lsb-release gnupg gnupg2 gpg apt-transport-https python3-pip apt-file attr bash-completion bc bison clang command-not-found dialog dos2unix ed flex gawk gperf htop libresolv-wrapper lld llvm lsof man neofetch neovim rhash tree tshark unbound unzip xxhash openssh-server openssh-client
STOPSIGNAL SIGSTOP
CMD [ "zsh" ]
WORKDIR /root

# Nodejs
RUN curl https://deb.nodesource.com/setup_lts.x | bash && apt install nodejs -y

ARG USERNAME="devcontainer"
ARG USER_UID="1000"
ARG USER_GID=$USER_UID

# Add non root user and Install oh my zsh
RUN addgroup --gid "${USER_GID}" "${USERNAME}"; useradd --uid "${USER_UID}" --gid "${USER_GID}" --groups sudo -m --shell /usr/bib/zsh "${USERNAME}" -p test
USER $USERNAME
WORKDIR /home/$USERNAME
RUN git clone https://sirherobrine23.org/Sirherobrine23/dotfiles.git dotfiles && cd dotfiles && ./install; cd /home/$USERNAME; rm -rf dotfiles