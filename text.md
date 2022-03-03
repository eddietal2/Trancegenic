  GNU nano 2.0.6                                 File: .zshrc                                                               Modified  

# General
alias sbash="source .zshrc"
alias edit-bash="sudo nano .zshrc && source .zshrc"

# Angular Apps
alias ng-et="cd Desktop/personal-website/eddietaliaferro.com && ng serve --host 10.0.1.16"
alias ng-fyf="cd Desktop/United-Way/FYF && ng serve --host 10.0.1.16"
alias ng-fairs="cd Desktop/United-Way/UW_SEM_FAIRS/uw_sem_fairs && ng serve --host 10.0.1.16"
alias ng-uwadmin="cd Desktop/United-Way/Admin && ng serve"
alias ng-affil="cd Desktop/Affiliate-Template && ng serve --host 10.0.1.16"
alias ng-affil-admin="cd Desktop/Affiliate-Admin-Template && ng serve --host 10.0.1.16"

# Mongo
alias start-mongo="sudo brew services start mongodb-community@5.0"
alias stop-mongo="brew services stop mongodb-community@5.0"

# Severs
alias node-et="cd Desktop/server-personal-website && npm start"
alias node-fyf="cd Desktop/United-Way/FYF-Server && npm start"
alias node-fairs="cd Desktop/United-Way/UW_SEM_FAIRS_SERVER && npm start"
alias node-admin="cd Desktop/United-Way/Admin-Server && npm start"
alias node-affil="cd Desktop/Affiliate-Server-Template && npm start"

#AWS
alias et-ec2-start="sudo ssh -i ~/Desktop/et.pem ec2-user@ec2-52-14-179-29.us-east-2.compute.amazonaws.com"

alias et-copy-www="clear && echo Building ET.com, then copying to AWS...  && cd ~/Desktop/personal-website/eddietaliaferro.com  && ng$

alias affil-ec2-start="sudo ssh -i ~/Desktop/affil.pem ec2-user@ec2-51.us-east-2.compute.amazonaws.com && clear"

alias affil-copy-www="clear && echo Building Affiliate Site, then copying to AWS ... && cd ~/Desktop/Affiliate-Template && ng build -$
